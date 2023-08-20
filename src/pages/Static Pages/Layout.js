import { Box } from '@mui/material'
import React from 'react'
import RoutePaths from '../../router/RoutePath'
import { Route, Routes } from 'react-router-dom'

function Layout() {
    return (
        <Box>
            {RoutePaths.map((val) => (<Routes>
                <Route path={val.path} element={val.element} />
            </Routes>))}
        </Box>
    )
}

export default Layout
