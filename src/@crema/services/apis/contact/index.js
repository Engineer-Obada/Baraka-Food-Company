import contactData from '../../db/apps/contact/contactList';
import mock from '../../MockConfig';

import warehouseList from '@crema/services/db/warehouse/warehouseList';
import productData from '@crema/services/db/product/productData'
import customerList from '@crema/services/db/customer/customerList';
import StockList from '@crema/services/db/warehouseProduct/warehouseProduct';
import  OrderDetail  from '@crema/services/db/order/Order';
import {  recentOrders } from '@crema/services/db/ecommerce/ecommerceData';


let OrderData = OrderDetail;
let recentOrdersData = recentOrders;

mock.onGet('/api/order/edit/').reply((request)=>{
  const {id} = request.params;
  console.log("iddd",id);
  const filterOrderData = OrderData.filter((item)=> +item.OrderId === +id)
return[200,filterOrderData[0]]
})
mock.onGet('/api/order/editt/').reply((request)=>{
  const {id} = request.params;
  console.log("iddd",id);
  const filterOrderData = OrderData.filter((item)=> +item.OrderId === +id)
return[200,filterOrderData[0]]
})
mock.onPost('/api/order/addItem/').reply((request)=>{
  const id = JSON.parse(request.data);
  const filterOrderData = OrderData.filter((item)=> +item.OrderId === +id)
  filterOrderData[0].data.push({
      id: 11,
      name: "Mensobada's Exclusive Watch",
      orderedQuantity: 70,
      approvedQuantity : 70,
      pricePeices : 90,
      available : 230,
      amount: 450,
      image: '/assets/images/ecommerce/watch1.png',
  })

  return[200,filterOrderData]

})

mock.onPost('/api/orderItem/delete/').reply((request)=>{
  const data = JSON.parse(request.data);
  const updatedOrderDetail = OrderData.map((order) => {
    if (order.OrderId === data.orderId) {
      const filteredData = order.data.filter((item) => item.id !== data.itemId);
      return {
        ...order,
        data: filteredData,
      };
    }
    return order;
  });
  OrderData = updatedOrderDetail

  return [200,OrderData]

})

mock.onPut('/api/product/incrementItem/').reply((request)=>{
  const data = JSON.parse(request.data);
  const updatedOrderDetail = OrderData.map((order) => {
    if (order.OrderId === data.orderId) {
      const updateData = order.data.map((item) =>{
        if(item.id === data.itemId){
          return{
            ...item,
            approvedQuantity: data.itemApprove,

          }
        }
        return item 
      });
      return {
        ...order,
        data: updateData,
      };
    }
    return order;
  });
  OrderData = updatedOrderDetail
  return[200,OrderData]

})


mock.onPut('/api/orderiItem/decrementItem/').reply((request)=>{
  const data = JSON.parse(request.data);
  const updatedOrderDetail = OrderData.map((order) => {
    if (order.OrderId === data.orderId) {
      const updateData = order.data.map((item) =>{
        if(item.id === data.itemId){
          return{
            ...item,
            approvedQuantity: data.itemApprove,

          }
        }
        return item 
      });
      return {
        ...order,
        data: updateData,
      };
    }
    return order;
  });
  OrderData = updatedOrderDetail
  return[200,OrderData]

})

 mock.onPost('/api/order/note/').reply(()=>{
  return[200]
 }
 )
 mock.onPut('/api/order/reject/').reply(()=>{
   
  return[200]
 }
 
 )
 mock.onPost('/api/order/delete/').reply((request)=>{

  const productId = JSON.parse(request.data)
  recentOrdersData = recentOrdersData.filter((product)=>
    +productId != +product.id
  );

  return [200,productId]

 }
 )

 mock.onGet('/api/order/showAll').reply(()=>{

  return[200,recentOrdersData]
})
/******************************/

let stockData = StockList;
mock.onGet('/warehouse/stock/').reply((config) => {
  const { id } = config.params;
  const filteredStockData = stockData.filter((item) => +item.id === +id);
    const response = [200, filteredStockData[0].products];
    return response;
  
});



/**********************************/
const api = 'api'

let customerData = customerList;

mock.onGet('/api/customer/showAll').reply(()=>{
  return[200,customerData]
})

mock.onPost(`/${api}/customer/link`).reply((request)=>{
  const customerid = JSON.parse(request.data);
   customerData.map(customer =>
    customer.id === customerid.id ?   customer.status="Linked"  : customer
  );
  return [200,customerid]
  })
mock.onPost(`/${api}/customer/reject`).reply((request)=>{
  const customerid = JSON.parse(request.data);
    customerData.map(customer =>
    customer.id === customerid.id ?   customer.status="Rejected"  : customer
  );
  return [200,customerid]
  })



mock.onPost('/api/customer/delete').reply((request)=>{
  const productId = request.data;

  customerData = customerData.filter((product)=>
    productId != product.id
  );
  return [200,productId]
})


mock.onPut(`/api/customer/accountAvailable`).reply((request)=>{
  const customerid = JSON.parse(request.data);
  customerData.map(customer =>
    customer.id === customerid.contactIds[0] ?   customer.accountStatus=customerid.status  : customer
  );

  return [200,customerid]
  })
/***********************************************/
let productsData = productData.productItems;

// mock.onPost(`/${api}/product/add`).reply((request)=>{
// const {product} = JSON.parse(request.data);
// productsData = [product,...productsData];
// return [200,product]
// })
mock.onGet('/api/product').reply(()=>{
  return[200,productsData]
})

mock.onPost('/api/product/delete').reply((request)=>{
  const productId = request.data;

  productsData = productsData.filter((product)=>
    productId != product.id
  )
  return [200,productsData]
})

mock.onPut('/api/product/update').reply((request)=>{
  const {product} = JSON.parse(request.data);
  productsData = productsData.map((item)=>
    item.id === product.id ? product : item )
  return[200, product]
})
/****************************************************************/
let categoryData = productData.categoryData;

mock.onPost(`/${api}/category/add`).reply((request)=>{
  console.log('dddd',JSON.parse(request.data));
const category = JSON.parse(request.data);
console.log('dsdsds',category);

categoryData = [category,...categoryData];
return [200,category]
})
mock.onGet('/api/category').reply(()=>{
  return[200,categoryData]
})

mock.onPost(`/${api}/category/delete`).reply((request)=>{

  const categoryId = request.data;

  categoryData = categoryData.filter(
    (category)=>
    categoryId !=category.id
  )
  return [200,categoryData]
})

/*************************************************/
let warehouseData = warehouseList;
mock.onGet('/api/warehous').reply((request) => {
  console.log('request',request);
  console.log(warehouseData);
   return [200,warehouseData];
 });
mock.onGet('/api/warehouse').reply((config) => {
  const params = config.params;
  const index = params.page * 15;
  const count = warehouseData.length;
  const data =
    warehouseData.length > 15
      ? warehouseData.slice(index, index + 15)
      : warehouseData;
      console.log('ds',warehouseData);
  return [200, { data, count }];
});


mock.onPost('/api/warehouse/delete').reply((request) => {
  const { contactIds, page } = JSON.parse(request.data);
  warehouseData = warehouseData.filter(
    (contact) => !contactIds.includes(contact.id)
  );
  const index = page * 15;
  const count = warehouseData.length;
  const data =
    warehouseData.length > 15
      ? warehouseData.slice(index, index + 15)
      : warehouseData;
  return [200, { data, count }];
});


mock.onPost('/api/warehouse/add').reply((request) => {
  const  warehouse  = JSON.parse(request.data);
  warehouseData = [ warehouse.contact, ...warehouseData];
  return [200, warehouse];
});

mock.onPut('/api/warehouse/update').reply((request) => {
  const { contact } = JSON.parse(request.data);
  warehouseData = warehouseData.map((item) =>
    item.id === contact.id ? contact : item
  );
  return [200, contact];
});

mock.onGet('/api/warehouse/contact/').reply((config) => {
  const params = config.params;
  const response = warehouseData.find(
    (contact) => contact.id === parseInt(params.id)
  );
  return [200, response];
});
/********************************/



let contactList = contactData;

// mock.onPost(`/api/employee/add`).reply((request)=>{
// const {employee} = JSON.parse(request.data);
// contactList = [employee,...contactList];
// return [200,employee]
// })
// mock.onGet('/api/employee').reply(()=>{
//   return[200,contactList]
// })
mock.onPut(`api/employee/update/accountStatus`).reply((request)=>{
  const customerid = JSON.parse(request.data);
  contactList.map(customer =>
    customer.id === customerid.contactIds[0] ?   customer.accountStatus=customerid.status  : customer
  );

  return [200,customerid]
  })

// mock.onPost('/api/employee/delete').reply((request)=>{
//   const productId = request.data;

//   contactList = contactList.filter((product)=>
//     productId != product.id
//   )
//   return [200,contactList]
// })

mock.onPut('/api/employee/update').reply((request)=>{
  const {employee} = JSON.parse(request.data);
  contactList = contactList.map((item)=>
    item.id === employee.id ? employee : item )
  return[200, employee]
})
