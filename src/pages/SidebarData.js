import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Financial Accounting',
    path: '/financial-accounting',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Generally Accepted Accounting Principles',
        path: '/financial-accounting/gaap',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Financial Statements',
        path: '/financial-accounting/financial-statements',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Managerial Accounting',
    path: '/managerial-accounting',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cost Accounting',
        path: '/managerial-accounting/cost-accounting',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Forecasting',
        path: '/managerial-accounting/forecasting',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'CVP Analysis',
        path: '/managerial-accounting/cvp-analysis',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Auditing',
    path: '/auditing',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'External Auditing',
        path: '/auditing/external-auditing',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Internal Auditing',
        path: '/auditing/internal-auditing',
        icon: <IoIcons.IoIosPaper />
      }

    ]
  },
  {
    title: 'Tax Accounting',
    path: '/tax-accounting',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tax Planning',
        path: '/tax-accounting/tax-planning',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Tax Compliance',
        path: '/tax-accounting/tax-compliance',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Individual Taxes',
        path: '/tax-accounting/individual-taxes',
        icon: <IoIcons.IoIosPaper />
      }

    ]
  },
  {
    title: 'Accounting Ethics',
    path: '/accounting-ethics',
    icon: <IoIcons.IoIosPaper />
  }
];