'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/store/hooks';
import { resetState } from '@/store/resumeSlice';

export default function ClearDataButton() {
    const dispatch = useAppDispatch();

    const handleClear = () => {
        if (confirm('Are you sure you want to delete all information? This action cannot be undone.')) {
            dispatch(resetState());
        }
    };

    return (
        <Button variant="destructive" onClick={handleClear}>
            Delete All Info
        </Button>
    );
}
