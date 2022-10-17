import React from 'react';
import { useMatch } from 'react-router-dom';

import { GROUPS_TREE_ROUTES_ABS } from '../../../routes';
import { useServiceDocsServiceContext } from '../services/service-docs-service';

import {
  ServiceDocsServiceTreeItem,
  ServiceDocsTreeItem,
  getGroupByIdentifier,
} from './service-docs-utils';

/**
 * Get the selected Tree Item using the Router.
 */
export function useSelectedTreeItem(): ServiceDocsTreeItem | undefined {
  const serviceRouterMatch = useMatch(GROUPS_TREE_ROUTES_ABS.service);
  const groupRouterMatch = useMatch(GROUPS_TREE_ROUTES_ABS.group);
  const rootRouterMatch = useMatch(GROUPS_TREE_ROUTES_ABS.root);
  const serviceDocsService = useServiceDocsServiceContext();

  const result = React.useMemo((): ServiceDocsTreeItem | undefined => {
    if (serviceRouterMatch && serviceRouterMatch.params.service !== undefined) {
      return getServiceByName(
        serviceRouterMatch.params.service,
        serviceDocsService.serviceDocs,
      );
    }

    if (groupRouterMatch && groupRouterMatch.params.group !== undefined) {
      return getGroupByIdentifier(
        groupRouterMatch.params.group,
        serviceDocsService.groupsTree,
      );
    }
    if (rootRouterMatch) {
      return serviceDocsService.groupsTree;
    }
    console.warn(
      'The service, group, and root routes did not match. This should not happen.',
    );
    return undefined;
  }, [
    groupRouterMatch,
    rootRouterMatch,
    serviceDocsService.groupsTree,
    serviceDocsService.serviceDocs,
    serviceRouterMatch,
  ]);

  return result;
}

function getServiceByName(
  serviceName: string,
  allServices: ServiceDocsServiceTreeItem[],
): ServiceDocsServiceTreeItem | undefined {
  return allServices.find((item) => {
    if (item.name === serviceName) {
      return true;
    }
    return false;
  });
}