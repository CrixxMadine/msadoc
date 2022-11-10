// tslint:disable
/**
 * msdoc server API
 * The msdoc server API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface DeleteServiceDocResponse
 */
export interface DeleteServiceDocResponse {
    /**
     * Name of the service. Used as identifier.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    name: string;
    /**
     * Name of the group. Used as identifier to match with group meta-data. Hierarchical groups separated by a dot, e.g. \"group.sub-group.sub-sub-group\"
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    group?: string;
    /**
     * List of tags used to filter.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    tags?: Array<string>;
    /**
     * URL to code repository.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    repository?: string;
    /**
     * URL to task board.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    taskBoard?: string;
    /**
     * List of consumed API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    consumedAPIs?: Array<string>;
    /**
     * List of provided API identifiers. API identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    providedAPIs?: Array<string>;
    /**
     * List of published event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    publishedEvents?: Array<string>;
    /**
     * List of subscribed event identifiers. Event identifier matched for dependency analysis.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    subscribedEvents?: Array<string>;
    /**
     * URL to development documentation.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    developmentDocumentation?: string;
    /**
     * URL to deployment documentation.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    deploymentDocumentation?: string;
    /**
     * URL to API documentation.
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    apiDocumentation?: string;
    /**
     * Responsible team identifier. Used for matching multiple services to teams
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    responsibleTeam?: string;
    /**
     * List of responsible person identifiers.
     * @type {Array<string>}
     * @memberof DeleteServiceDocResponse
     */
    responsibles?: Array<string>;
    /**
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    creationTimestamp: string;
    /**
     * @type {string}
     * @memberof DeleteServiceDocResponse
     */
    updateTimestamp: string;
}
