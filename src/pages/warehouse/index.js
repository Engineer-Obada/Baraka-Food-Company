import React from 'react';
import AppsContainer from '@crema/core/AppsContainer';
import {useGetDataApi} from '@crema/utility/APIHooks';
import Warehouseisting from './WarehouseListing';
import { baseURL } from '@crema/services/ApiConfig';
const warhouse = () => {
  const [{apiData, loading}, {setQueryParams, setData, reCallAPI}] =
    useGetDataApi(`${baseURL}/api/warehouse`, {}, {}, false);
  return (
    <AppsContainer
      title={"Warhouse"}
    >
      <Warehouseisting
        apiData={apiData}
        loading={loading}
        setQueryParams={setQueryParams}
        setData={setData}
        reCallAPI={reCallAPI}
      />
    </AppsContainer>
  );
};

export default warhouse;
