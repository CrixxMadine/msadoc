import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('ApiKeysController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/api-keys (POST)', () => {
    it('should be protected', async () => {
      await request(app.getHttpServer())
        .post('/api-keys')
        .send({
          keyName: 'testkey',
        })
        .expect(401);
    });

    it('should create api keys', async () => {
      const accessToken = await getAccessToken();
      const apiKeyResponse = await request(app.getHttpServer())
        .post('/api-keys')
        .auth(accessToken, { type: 'bearer' })
        .send({
          keyName: 'testkey',
        })
        .expect(200);
      expect(apiKeyResponse.body.apiKey).toBeDefined();
    });
  });

  describe('/api-keys (GET)', () => {
    it('should be protected', async () => {
      await request(app.getHttpServer()).get('/api-keys').expect(401);
    });

    it('should list api keys', async () => {
      const accessToken = await getAccessToken();
      await request(app.getHttpServer())
        .post('/api-keys')
        .auth(accessToken, { type: 'bearer' })
        .send({
          keyName: 'testkey',
        })
        .expect(200);

      const apiKeyResponse = await request(app.getHttpServer())
        .get('/api-keys')
        .auth(accessToken, { type: 'bearer' })
        .expect(200);
      expect(apiKeyResponse.body.apiKeys).toEqual([
        {
          keyName: 'testkey',
        },
      ]);
    });
  });

  describe('/api-keys/test (GET)', () => {
    it('should be protected', async () => {
      await request(app.getHttpServer()).get('/api-keys/test').expect(401);
    });

    it('should validate valid api key', async () => {
      const accessToken = await getAccessToken();
      const apiKeyResponse = await request(app.getHttpServer())
        .post('/api-keys')
        .auth(accessToken, { type: 'bearer' })
        .send({
          keyName: 'testkey',
        })
        .expect(200);
      const apiKey = apiKeyResponse.body.apiKey;

      const testResponse = await request(app.getHttpServer())
        .get('/api-keys/test')
        .auth(apiKey, { type: 'bearer' })
        .expect(200);
      expect(testResponse.body).toEqual({
        isApiKeyValid: true,
      });
    });
  });

  it('should not validate invalid api key', async () => {
    const testResponse = await request(app.getHttpServer())
      .get('/api-keys/test')
      .auth('invalidApiKey', { type: 'bearer' })
      .expect(401);
    expect(testResponse.body).toEqual({
      isApiKeyValid: false,
    });
  });

  async function getAccessToken(): Promise<string> {
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'myuser',
        password: '12345',
      });
    return loginResponse.body.access_token;
  }
});