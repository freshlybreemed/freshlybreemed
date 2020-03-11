import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header class="bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav class="f5 fw6  tracked"></nav>
    </header>
  );
};

export default Navigation;
