import Mock from 'mockjs';
import data from './moke.json';

//映射路由
Mock.mock("/api/data",{
  code:0,
  data:data.data
});
