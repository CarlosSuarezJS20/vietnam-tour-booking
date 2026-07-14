'use client';

import { useState } from 'react';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';

interface ExistingItem {
  id: string;
  label: string;
  groupLabel?: string;
}

interface PendingNewItem {
  tempId: string;
  label: string;
  extraValue?: string;
}

interface EntitySelectPopupProps {
  isOpen: boolean;
  title: string;
  existingItems: ExistingItem[];
  selectedIds: string[];
  pendingNewItems: PendingNewItem[];
  extraFieldOptions?: Array<{ label: string; value: string }>;
  extraFieldLabel?: string;
  onToggleExisting: (id: string) => void;
  onAddNew: (label: string, extraValue?: string) => void;
  onRemoveNew: (tempId: string) => void;
  onConfirm: () => void;
  onClose: () => void;
}

export const EntitySelectPopup = ({
  isOpen,
  title,
  existingItems,
  selectedIds,
  pendingNewItems,
  extraFieldOptions,
  extraFieldLabel,
  onToggleExisting,
  onAddNew,
  onRemoveNew,
  onConfirm,
  onClose,
}: EntitySelectPopupProps) => {
  const [newItemLabel, setNewItemLabel] = useState('');
  const [newItemExtraValue, setNewItemExtraValue] = useState('');

  useBodyOverflow(isOpen);

  if (!isOpen) return null;

  const handleAddNew = () => {
    if (!newItemLabel.trim()) return;
    if (extraFieldLabel && !newItemExtraValue) return;

    onAddNew(newItemLabel, newItemExtraValue);
    setNewItemLabel('');
    setNewItemExtraValue('');
  };

  const groupedItems = existingItems.reduce(
    (acc, item) => {
      const group = item.groupLabel || 'Other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, ExistingItem[]>
  );

  const getExtraFieldLabel = (value: string) => {
    return extraFieldOptions?.find((opt) => opt.value === value)?.label || value;
  };

  const previewItem = newItemLabel.trim() ? {
    label: newItemLabel,
    extraValue: newItemExtraValue,
    extraValueLabel: newItemExtraValue ? getExtraFieldLabel(newItemExtraValue) : undefined,
  } : null;

  const itemExists = existingItems.some(
    (item) => item.label.toLowerCase() === newItemLabel.trim().toLowerCase()
  );

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[80vh] flex flex-col">
        <div className="px-6 py-4 border-b border-[#17171724]">
          <h2 className="text-lg font-semibold text-[#171717]">{title}</h2>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Left side - Existing items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 border-r border-[#17171724]">
            <p className="text-xs font-medium text-[#17171799] uppercase mb-3">Available</p>
            {Object.entries(groupedItems).map(([groupLabel, items]) => (
              <div key={groupLabel} className="mb-4">
                {groupLabel !== 'Other' && (
                  <p className="text-xs font-medium text-[#17171799] uppercase mb-2">
                    {groupLabel}
                  </p>
                )}
                {items.map((item) => (
                  <label key={item.id} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-[#f7f5f0] px-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => onToggleExisting(item.id)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-[#171717]">{item.label}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>

          {/* Right side - Add new + Added items */}
          <div className="w-80 bg-[#f7f5f0] flex flex-col overflow-hidden">
            <div className="px-6 py-4 flex-shrink-0">
              <p className="text-xs font-medium text-[#17171799] uppercase mb-3">Add New</p>

              <div className="space-y-3">
              {extraFieldLabel && extraFieldOptions && (
                <div>
                  <label className="block text-xs font-medium text-[#17171799] uppercase mb-2">{extraFieldLabel}</label>
                  <select
                    value={newItemExtraValue}
                    onChange={(e) => setNewItemExtraValue(e.target.value)}
                    className="w-full px-3 py-2 border border-[#17171724] rounded text-sm bg-white"
                  >
                    <option value="">Select {extraFieldLabel}</option>
                    {extraFieldOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#17171799] uppercase mb-2">Name</label>
                <input
                  type="text"
                  placeholder={`Enter ${title.toLowerCase()}`}
                  value={newItemLabel}
                  onChange={(e) => setNewItemLabel(e.target.value)}
                  disabled={!!(extraFieldLabel && !newItemExtraValue)}
                  className="w-full px-3 py-2 border border-[#17171724] rounded text-sm bg-white disabled:bg-[#e8e5dd] disabled:text-[#17171799] disabled:cursor-not-allowed"
                  autoFocus
                />
              </div>

              {/* Existing item warning */}
              {newItemLabel.trim() && itemExists && (
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <p className="text-xs text-red-700 font-medium">
                    ⚠ This {title.toLowerCase()} already exists
                  </p>
                </div>
              )}

              {/* Preview */}
              {previewItem && !itemExists && (
                <div className="pt-3 border-t border-[#17171724]">
                  <p className="text-xs font-medium text-[#17171799] uppercase mb-2">Preview</p>
                  <div className="bg-white px-3 py-2 rounded border border-[#17171724]">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={true} disabled className="w-4 h-4" />
                      <div className="flex-1">
                        <span className="text-sm text-[#171717]">{previewItem.label}</span>
                        <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">
                          new
                        </span>
                        {previewItem.extraValueLabel && (
                          <p className="text-xs text-[#17171799] mt-1">{extraFieldLabel}: {previewItem.extraValueLabel}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    setNewItemLabel('');
                    setNewItemExtraValue('');
                  }}
                  className="flex-1 px-3 py-2 text-sm font-medium text-[#171717] border border-[#17171724] rounded hover:bg-white transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleAddNew}
                  disabled={!newItemLabel.trim() || !!(extraFieldLabel && !newItemExtraValue) || itemExists}
                  className="flex-1 px-3 py-2 bg-[#DC143C] text-white rounded text-sm font-medium hover:bg-[#b81132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Added items section - scrollable */}
            {pendingNewItems.length > 0 && (
              <div className="flex-1 overflow-y-auto border-t border-[#17171724]">
                <div className="sticky top-0 bg-[#f7f5f0] px-6 py-4 z-10">
                  <p className="text-xs font-medium text-[#17171799] uppercase">
                    Added ({pendingNewItems.length})
                  </p>
                </div>
                <div className="space-y-2 px-6 pb-4">
                  {pendingNewItems.map((item) => (
                    <div
                      key={item.tempId}
                      className="flex items-center justify-between p-2 bg-white border border-yellow-200 rounded hover:bg-yellow-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-[#171717]">{item.label}</span>
                        {item.extraValue && (
                          <p className="text-xs text-[#17171799] mt-0.5">{extraFieldLabel}: {item.extraValue}</p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoveNew(item.tempId)}
                        className="ml-2 text-[#17171799] hover:text-red-600 transition-colors flex-shrink-0"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 py-3 border-t border-[#17171724] flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#171717] hover:bg-[#f7f5f0] rounded transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={selectedIds.length === 0 && pendingNewItems.length === 0}
            className="px-4 py-2 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
