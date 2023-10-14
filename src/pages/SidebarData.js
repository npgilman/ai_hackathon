import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Financial Accounting',
    path: '/FinancialAccounting',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
    {
        title: 'Topic Overview',
        path: '/FinancialAccounting/Overview',
        icon: <IoIcons.IoIosPaper />
    }
    ]
  },
  {
    title: 'Reports',
    path: '/Reports',
    icon: <IoIcons.IoIosPaper />
  }
];