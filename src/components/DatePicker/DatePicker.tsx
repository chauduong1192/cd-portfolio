'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/utils/classnames';

type DatePickerProps = {
  onSelect: (date: Date | undefined) => void;
};

export const DatePicker = ({ onSelect }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setDate(date);
    onSelect?.(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            `w-[280px] justify-start text-left font-normal border-gray-light text-gray-dark
            bg-white`,
            !date && 'text-gray-dark',
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'dd-MM-yyyy') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar mode='single' selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};
