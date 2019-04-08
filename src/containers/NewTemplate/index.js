import React, {Component} from 'react'
import Wrapper from '@/components/Wrapper'
import { Steps, Button, Form, Input, Checkbox } from 'antd'
import './style.less'

const Step = Steps.Step
const { TextArea } = Input;

export default class NewActivity extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const self = this;
    const formItemLayout = {
      labelCol: {
        xs: { span: 0, },
        sm: { span: 6 }, // 左宽
      },
      wrapperCol: {
        xs: { span: 0 },
        sm: { span: 18 }, // 右宽
      },
    };

    return (
      <div>
        <Wrapper router={self.props.router} navs={["营销中心", "推广活动", "新建线下活动"]}>
          <Steps className="nav-steps" size="small" current={1}>
            <Step title="活动内容" />
            <Step title="报名模板" />
          </Steps>
          <div className="tempbox">
            <div className="tempbox-page">
              <div className="tempbox-page-img">报名活动主图</div>
              <div className="tempbox-page-msg">报名信息区</div>
              <div className="tempbox-page-btns">
                <Button type="primary">立即报名</Button>         
              </div>
              <div className="tempbox-page-rules">
                <span>----活动规则----</span>
              </div>
            </div>
            <div className="tempbox-form">
              <Form {...formItemLayout} >
                <Form.Item
                    label="*活动主图"
                  >
                    <a href="javascript:void(0)">添加图片</a>
                </Form.Item>
                <Form.Item
                  label={`页面底色`}
                >
                  <div className="color-selector">
                    <span></span>
                    <a href="javascript:void(0)">自定义</a>
                  </div>
                </Form.Item>
                <Form.Item
                    label={`*报名字段`}
                  >
                    <a href="javascript:void(0)">添加字段</a>
                </Form.Item>
                <Form.Item
                    label={`按钮文案`}
                  >
                    <Input placeholder="默认为’立即报名‘"/>
                </Form.Item>
                <Form.Item
                    label={`*按钮底色`}
                  >
                    <div className="color-selector">
                      <span></span>
                      <a href="javascript:void(0)">自定义</a>
                    </div>
                </Form.Item>
                <Form.Item
                    label={`*活动规则`}
                  >
                    <TextArea size="small" placeholder="提供给用户查看的活动规则" rows={4}></TextArea>
                    <Checkbox onChange={() => {

                    }}>隐藏不显示</Checkbox>
                    <div>将整个活动规则区域在页面上进行隐藏</div>
                </Form.Item>
              </Form>
            </div>
          </div>

          <div className="temp-btns">
            <Button type="primary">提交</Button>         
            <Button>保存</Button>
            <a href="javascipt:">取消</a>
          </div>

        </Wrapper>
      </div>
    )
    
  }
}