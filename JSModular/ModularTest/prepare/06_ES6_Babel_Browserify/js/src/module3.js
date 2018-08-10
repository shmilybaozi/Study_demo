// 默认暴露,可以暴露仁义数据类型,暴露什么数据接受到的就是什么数据
// 只能写一次
// export default value
export default {
  name: 'Tom',
  setName: function (name) {
    this.name = name
  }
}