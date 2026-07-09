'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { adminNavigation, isGroup } from '@/data/adminNavigation';

interface SidebarState {
  expandedGroups: Record<string, boolean>;
}

export const Sidebar = () => {
  const pathname = usePathname();
  const [state, setState] = useState<SidebarState>({
    expandedGroups: {
      Commerce: true,
      'Content & Insights': false,
    },
  });

  const isActive = (href: string) => pathname === href;

  const toggleGroup = (label: string) => {
    setState((prev) => ({
      ...prev,
      expandedGroups: {
        ...prev.expandedGroups,
        [label]: !prev.expandedGroups[label],
      },
    }));
  };

  return (
    <aside className="w-64 border-r border-[#17171724] bg-white">
      <nav className="flex flex-col gap-0 p-4">
        {adminNavigation.map((item, idx) => {
          if (isGroup(item)) {
            const isExpanded = state.expandedGroups[item.label];
            return (
              <div key={`group-${item.label}`}>
                {idx > 0 && idx === 3 && (
                  <div className="my-4 border-t border-[#17171724]" />
                )}
                <button
                  onClick={() => toggleGroup(item.label)}
                  className="group flex w-full items-center gap-3 rounded px-3 py-2 text-sm text-[#17171799] transition-colors hover:bg-[#f7f5f0]"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1 text-left uppercase tracking-wide">
                    {item.label}
                  </span>
                  {isExpanded ? (
                    <FiChevronDown className="h-4 w-4" />
                  ) : (
                    <FiChevronRight className="h-4 w-4" />
                  )}
                </button>

                {isExpanded && (
                  <div className="flex flex-col gap-0">
                    {item.children.map((child) => (
                      <Link
                        key={`leaf-${child.href}`}
                        href={child.href}
                        className={`flex items-center gap-3 rounded px-3 py-2 pl-11 transition-colors ${
                          isActive(child.href)
                            ? 'border-l-3 border-l-[#DC143C] bg-white text-[#171717] font-medium'
                            : 'text-[#171717] hover:bg-[#f7f5f0]'
                        }`}
                      >
                        <child.icon
                          className={`h-4 w-4 ${
                            isActive(child.href)
                              ? 'text-[#DC143C]'
                              : 'text-[#17171766]'
                          }`}
                        />
                        <span className="text-sm">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={`leaf-${item.href}`}
              href={item.href}
              className={`flex items-center gap-3 rounded px-3 py-2 transition-colors ${
                item.disabled
                  ? 'cursor-not-allowed opacity-40'
                  : isActive(item.href)
                    ? 'border-l-3 border-l-[#DC143C] text-[#171717] font-medium'
                    : 'text-[#171717] hover:bg-[#f7f5f0]'
              }`}
              onClick={(e) => item.disabled && e.preventDefault()}
            >
              <item.icon
                className={`h-4 w-4 ${
                  isActive(item.href) ? 'text-[#DC143C]' : 'text-[#17171766]'
                }`}
              />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
