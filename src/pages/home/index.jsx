// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import LayoutContainer from 'pages/layout'
// import authToken from 'utils/auth'
// class Home extends Component {
//     state = {
//         isLogin: false,
//     }
//     componentWillMount() {
//         this.setState({
//             isLogin: authToken.getToken() ? true : false,
//         })
//     }

//     render() {
//         if (!this.state.isLogin) {
//             return <Redirect to="/login"></Redirect>
//         }
//         return (
//             <div>
//                 <LayoutContainer></LayoutContainer>
//             </div>
//         )
//     }
// }

// export default Home
import React, { Component } from 'react'

class Home extends Component {
    render() {
        return <div>Home 页面</div>
    }
}

export default Home
