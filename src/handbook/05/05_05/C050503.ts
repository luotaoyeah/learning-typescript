/*
 * Functions
 *     this
 *         this parameters in callbacks
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 当函数作为回调函数传给其他组件时，组件在执行回调函数的时候，会把回调函数当成普通函数来调用（即非方法调用），
 * 因此回调函数中的 this 为 undefined，
 * 因此组件在定义该回调函数的类型时，需要使用 this parameter 将回调函数的 this 标注为 void；
 */

interface IElement {
  /*
   * 使用 this parameter 将 this 标注为 void，
   * 表示该回调函数会被当成普通函数调用，其 this 为 undefined；
   */
  addClickListener?(onClick: (this: void) => void): void;
}

const element: IElement = {
  addClickListener(onClick: (this: void) => void) {
    // 将回调函数当成普通函数来调用
    onClick();
  }
};

/*
 *
 */
class Handler {
  info: string;

  handleClick(this: Handler) {
    console.log(this.info);
  }
}

// 此时 Handler.handleClick() 方法的 this 参数跟 IElement.addClickListener() 方法的回调函数的 this 参数不匹配
/*
   TS2345: Argument of type '(this: Handler) => void' is not assignable to parameter of type '(this: void) => void'.
       The 'this' types of each signature are incompatible.
       Type 'void' is not assignable to type 'Handler'.
 */

/*
  element.addClickListener(new Handler().handleClick);
*/

console.log("\n-------------------------------------------------- 02");

/*
 * 修改方法定义中的 this 参数，使之与回调函数定义的 this 参数一致；
 */
class Handler02 {
  info: string;

  handleClick(this: void) {
    // 此时，this 参数的类型为 void，因此不能访问 this；
    /*
          console.log(this.info);
    */
  }
}

element.addClickListener(new Handler02().handleClick);

console.log("\n-------------------------------------------------- 03");

/*
 * 或者使用箭头函数，此时因为箭头函数可以捕获 this，
 * 因此在箭头函数中可以访问 this，并且不需要标注 this 参数；
 */
class Handler03 {
  info: string;

  handleClick = () => {
    console.log(this.info);
  };
}

element.addClickListener(new Handler03().handleClick);

export {};
