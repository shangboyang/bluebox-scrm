import React, { Component } from 'react'
import Wrapper from '@/components/Wrapper'

import {
  Form, Input, Select, Button, Table
} from 'antd';

import './style.less'

const { Option } = Select;
const { Column } = Table;

let tableData = [
  {
    key: 1,
    id: 'HD1001',
    name: '商品A介绍会',
    type: '线下会议',
    classify: '介绍会',
    registerTime: '2019-1-1 10:00至2019-1-15 10:00',
    activityTime: '2019-1-16 10:00至2019-1-16 15:00',
    status: '已结束',
    actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
  },
  {
    key: 2,
    id: 'HD2001',
    name: '商品B介绍会',
    type: '线下会议',
    classify: '介绍会',
    registerTime: '2019-1-1 10:00至2019-1-15 10:00',
    activityTime: '2019-1-16 10:00至2019-1-16 15:00',
    status: '草稿',
    actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
  },
  {
    key: 3,
    id: 'HD1003',
    name: '商品C介绍会',
    type: '在线直播',
    classify: '介绍会',
    registerTime: '2019-1-1 10:00至2019-1-15 10:00',
    activityTime: '2019-1-16 10:00至2019-1-16 15:00',
    status: '未开始',
    actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
  },
  {
    key: 4,
    id: 'HD1021',
    name: '商品D介绍会',
    type: '线下会议',
    classify: '介绍会',
    registerTime: '2019-1-1 10:00至2019-1-15 10:00',
    activityTime: '2019-1-16 10:00至2019-1-16 15:00',
    status: '进行中',
    actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
  },
  {
    key: 5,
    id: 'HD1005',
    name: '商品E介绍会',
    type: '发布会',
    classify: '介绍会',
    registerTime: '2019-1-1 10:00至2019-1-15 10:00',
    activityTime: '2019-1-16 10:00至2019-1-16 15:00',
    status: '已暂停',
    actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
  },
];

class ActivityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
  }

  render() {
    const self = this;
    const formItemLayout = {
      layout: 'inline',
      wrapperCol: {
        style: {
          marginRight: '20px'
        }
      },
      labelAlign: 'right',
      style: {
        margin: '15px 0 30px 0',
        fontSize: '12px',
        paddingLeft: '30px'
      }
    }

    tableData = [];
    for (let i = 0; i < 46; i++) {
      tableData.push({
        key: i,
        id: `HD100${i}`,
        name: '商品E介绍会',
        type: '发布会',
        classify: '介绍会',
        registerTime: '2019-1-1 10:00至2019-1-15 10:00',
        activityTime: '2019-1-16 10:00至2019-1-16 15:00',
        status: '已暂停',
        actions: ['编辑', '删除', '暂停', '查看', '启用', '活动数据', '推广', '二维码']
      });
    }

    let paginationParams = {
      showSizeChanger: true,
      defaultCurrent: 1,
      total: tableData.length,
      size: "small"
    }
    // console.log()
    return (
      <div>
        <Wrapper 
          router={self.props.router} navs={["营销中心", "推广活动"]}
          >
            <div className="activity-entrance">
              <div className="entrance-item">
                <div className="tpl-title">线下会议</div>
                <p className="tpl-desc">例：线下面对面的产品介绍会</p>
                <Button onClick={() => {
                  console.log(self.props)
                  self.props.router.push('/new')
                }} type="primary" style={{width: '145px', fontSize: '12px', lineHeight: '32px'}}>立即新建</Button>
              </div>
              <div className="entrance-item">
                <div className="tpl-title">在线直播</div>
                <p className="tpl-desc">例：在线直播产品介绍会</p>
                <Button type="primary" style={{width: '145px', fontSize: '12px', lineHeight: '32px'}}>立即新建</Button>
              </div>
            </div>
            <div className="activity-management">活动管理</div>
            <Form className="list-form" {...formItemLayout}>
              <Form.Item label={'活动名称'}>
                <Input placeholder="请输入活动名称" style={{width: '144px'}}/>
              </Form.Item>
              <Form.Item label={'活动状态'}>
                <Select defaultValue={'all'} style={{width: '144px'}}>
                  <Option value="all">全部</Option>
                  <Option value="draft">草稿</Option>
                  <Option value="notstart">未开始</Option>
                  <Option value="processing">进行中</Option>
                  <Option value="pause">已暂停</Option>
                  <Option value="end">已结束</Option>
                </Select>
              </Form.Item>
              <Form.Item label={'活动类型'}>
                <Select defaultValue={'all'} style={{width: '144px'}}>
                  <Option value="all">全部</Option>
                  <Option value="offline">线下会议</Option>
                  <Option value="online">在线直播</Option>
                </Select>
              </Form.Item>
              <Form.Item style={{display: 'block', paddingLeft: '70px', marginTop: '10px'}}>
                <Button type="primary" style={{width: '93px', fontSize: '12px', lineHeight: '32px'}}>筛选</Button>
                <div className="search-clear">清空筛选条件</div>
              </Form.Item>
            </Form>
            <Table className="list-table" dataSource={tableData} style={{fontSize: '12px'}} pagination={paginationParams}>
              <Column title="活动ID" dataIndex="id" key="id" />
              <Column title="活动名称" dataIndex="name" key="name" />
              <Column title="活动类型" dataIndex="type" key="type"/>
              <Column title="活动分类" dataIndex="classify" key="classify" />
              <Column title="活动报名时间" dataIndex="registerTime" key="registerTime" />
              <Column title="活动时间" dataIndex="activityTime" key="activityTime" />
              <Column title="状态" dataIndex="status" key="status" />
              <Column title="操作" key="actions" 
                render={(text, record, index) => (
                  <span>
                   {/* {console.log(text, record, index)} */}
                   {
                      record.actions.map((item, index) => <div className="table-action" key={index}>{item}</div>)
                    }
                  </span>
                )}
              />
            </Table>
        </Wrapper>
      </div>
    )
  }
}

export default ActivityList;