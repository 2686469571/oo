
// localStorage.setltem("key",value);


// 商品类成员
class Product{
    constructor(id,title,imgSrc,price){
      // 编号
        this.id=id;
        // 名称
        this.title=title;
        // 照片
        this.imaSrc=imgSrc;
        // 价格
        this.price=price;
    }
}

// 订单类成员
class Order{
    constructor(product,qty,selectStatus){
      // 编号
      this.id=product.id;
      // 商品名称
      this.title=product.title;
      // 商品价格
      this.price=product.price;
      // 照片
      this.imgSrc=product.imgSrc;
      // 数量
      this.qty=qty;
      // 商品的选择状态
      this.selectStatus=selectStatus;
    }
  }
//   购物车类   进来时基本为空的 数据
// 包含的数据类型  订单 总样本数 总件数 总价格
class CartData{
    constructor(){
      this.orderList=new Array();
      this.units=0;
      // 总件数
      this.totalQty=0;

      this.totalAmount=0;
    }
  }
//   购物车数据
  class ShoppingCart{

  // 将购物车数据写入本地存储中
      setDataToLocalSatorge(cartData){
      // 清楚原有存储写入新列表
          localStorage.removeItem('caicaiwang');
        //  写入本地存储
          localStorage.setItem('caicaiwang',JSON.stringify(cartData));
          
      }
          // 从本地存储中获取购物车数据
      gerDataFromLocalStorage(){
        let caicaiwang=localStorage.getItem('caicaiwang');
        //判断购物车是否为空
        if(caicaiwang==null||caicaiwang==""){
          return new CartData();
        }
        else{
          return JSON.parse(caicaiwang);
        }

      }
      // 加入购物车（写入localStorge）
    addToCart(order){
      // 本地存储中获取购物车的数据
     let cartData= this.gerDataFromLocalStorage();
      //  获取购物车json数据中的订单列表
     let orderList=cartData.orderList;
    //  设置标志判断是否为购物车商品，默认认为是新商品
     let isNewProdut=true;
    //  遍历订单列表，判断加入商品是否在购物车中
      for(let i=0;i<orderList.length;i++)
      for(let i in orderList){
        if(order.id==orderList[i].id){
          // 若新加入订单商品已经在购物车中,则变更订单列表中对应商品的数量,且变更商品标志位置
         orderList[i].qty+=order.qty;
          isNewProdut=false;
          break;

        }
      }
if(isNewProdut){
 
  cartData.units++;
  orderList.push(order);
}
cartData.totalQty+=order.qty;
cartData.totalAmount+=order.price*order.qty;
this.setDataToLocalSatorge(cartData);

    }
//  获取购物车中的订单列表
      getSelectedList(){

      }
      // 获取选中商品数量
      getSelecredQty(){
        let cartData=this.gerDataFromLocalStorage();
        let orderList=cartData.orderList;
        let selectedQty=0;
        for(let i in orderList){
          if(orderList[i].selecrStatus){
            selectedQty+=orderList[i].qty;
          }

        }
     return selectedQty;
      }
      // 获取选中商品的总价格
      getselectedAmount(){

        

      }
      // 设置购物车订单项选择状态
      setItemSelectStatus(id, selecrStatus){

      }
      // 清除购物车
      clearCart(){
         localStorage.removeItem("caicaiwang");
      }
    
  }