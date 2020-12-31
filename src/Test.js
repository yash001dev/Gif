import React from 'react'
import { connect } from 'react-redux'

function Test() {
    return (
        <div>
            <h1>hello test</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,

})

export default connect(mapStateToProps)(Test)
