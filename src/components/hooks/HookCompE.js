import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'
import HookCompF from './HookCompF'


function HookCompE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
        
    </div>
  )
}

export default HookCompE