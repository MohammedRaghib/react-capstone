// src/RoleBasedView.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider } from './UserContext';
import RoleBasedView from './RoleBasedView';

describe('RoleBasedView Component', () => {
    it('renders login prompt for unauthenticated users', () => {
        render(
            <UserProvider>
                <RoleBasedView />
            </UserProvider>
        );

        expect(screen.getByText(/Please log in to see your options./)).toBeInTheDocument();
    });

    it('renders AdminPanel for admin users', () => {
        const mockUser = { role: 'admin' };
        render(
            <UserProvider value={{ user: mockUser }}>
                <RoleBasedView />
            </UserProvider>
        );

        expect(screen.getByText(/Admin Panel: Manage Users and Settings/)).toBeInTheDocument();
    });

    it('renders JobPosterView for job poster users', () => {
        const mockUser = { role: 'jobPoster' };
        render(
            <UserProvider value={{ user: mockUser }}>
                <RoleBasedView />
            </UserProvider>
        );

        expect(screen.getByText(/Job Poster View: Post New Jobs/)).toBeInTheDocument();
    });

    it('renders JobSeekerView for job seeker users', () => {
        const mockUser = { role: 'jobSeeker' };
        render(
            <UserProvider value={{ user: mockUser }}>
                <RoleBasedView />
            </UserProvider>
        );

        expect(screen.getByText(/Job Seeker View: View and Apply for Jobs/)).toBeInTheDocument();
    });
});
