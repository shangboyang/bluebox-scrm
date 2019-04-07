import React, {Component} from 'react'
import Wrapper from '@/components/Wrapper'
import { Steps } from 'antd'

const Step = Steps.Step

export default class NewActivity extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const self = this;
    return (
      <div>
        <Wrapper router={self.props.router} navs={["营销中心", "推广活动", "新建线下活动"]}>
          <Steps className="nav-steps" size="small" current={1}>
            <Step title="活动内容" />
            <Step title="报名模板" />
          </Steps>
        </Wrapper>
      </div>
    )
    
  }
}