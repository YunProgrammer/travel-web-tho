import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';
import PackImageList from './ImageList/PackImageList';
import PackCardInfo from './PackCardInfo/PackCardInfo';
import '../Packages/PackageDetail.css'

export default function PackageDetail() {

  return (
    

        <Grid container spacing={5} className='packagescontainer'>
        <Grid item xs={6} md={8} className='imgcontainer'>
           <PackImageList/>
        </Grid>
        <Grid item xs={6} md={4}>
           <PackCardInfo/>
        </Grid>
      </Grid>
     
   
  )
}