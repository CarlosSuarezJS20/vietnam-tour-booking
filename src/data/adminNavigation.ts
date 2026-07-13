import {
  FiHome,
  FiClipboard,
  FiMap,
  FiShoppingBag,
  FiCreditCard,
  FiPackage,
  FiRotateCcw,
  FiFileText,
  FiEdit3,
  FiBarChart2,
  FiSettings,
  FiAnchor,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

export type AdminNavLeaf = {
  label: string;
  href: string;
  icon: IconType;
  disabled?: boolean;
};

export type AdminNavGroup = {
  label: string;
  icon: IconType;
  children: AdminNavLeaf[];
};

export type AdminNavEntry = AdminNavLeaf | AdminNavGroup;

function isGroup(item: AdminNavEntry): item is AdminNavGroup {
  return 'children' in item;
}

export const adminNavigation: AdminNavEntry[] = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: FiHome,
  },
  {
    label: 'Content & Insights',
    icon: FiFileText,
    children: [
      {
        label: 'Tours',
        href: '/admin/tours',
        icon: FiMap,
      },
      {
        label: 'Cruises',
        href: '/admin/cruises',
        icon: FiAnchor,
      },
      {
        label: 'Blog',
        href: '/admin/blog',
        icon: FiEdit3,
      },
      {
        label: 'Analytics',
        href: '/admin/analytics',
        icon: FiBarChart2,
      },
    ],
  },
  {
    label: 'Commerce',
    icon: FiShoppingBag,
    children: [
      {
        label: 'Bookings',
        href: '/admin/bookings',
        icon: FiClipboard,
      },
      {
        label: 'Payments',
        href: '/admin/payments',
        icon: FiCreditCard,
      },
      {
        label: 'Inventory',
        href: '/admin/inventory',
        icon: FiPackage,
      },
      {
        label: 'Refunds',
        href: '/admin/refunds',
        icon: FiRotateCcw,
      },
    ],
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: FiSettings,
    disabled: true,
  },
];

export { isGroup };
