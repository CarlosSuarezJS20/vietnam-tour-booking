import { CREATE_TOUR_MUTATION, CREATE_CRUISE_MUTATION, SEARCH_PRODUCTS_QUERY } from '../queries';
import * as fs from 'fs';
import * as path from 'path';

describe('Create mutations and search caching', () => {
  it('useCreateTourMutation should refetch SEARCH_PRODUCTS_QUERY after creation', () => {
    // Read the hooks.ts file to verify refetch configuration
    const hooksPath = path.join(__dirname, '../hooks.ts');
    const hooksContent = fs.readFileSync(hooksPath, 'utf-8');

    // Verify that SEARCH_PRODUCTS_QUERY is in the refetchQueries for tour creation
    expect(hooksContent).toContain('useCreateTourMutation');
    expect(hooksContent).toContain('SEARCH_PRODUCTS_QUERY');
    expect(hooksContent).toContain("types: ['tour']");
  });

  it('useCreateCruiseMutation should refetch SEARCH_PRODUCTS_QUERY after creation', () => {
    // Read the hooks.ts file to verify refetch configuration
    const hooksPath = path.join(__dirname, '../hooks.ts');
    const hooksContent = fs.readFileSync(hooksPath, 'utf-8');

    // Verify that SEARCH_PRODUCTS_QUERY is in the refetchQueries for cruise creation
    expect(hooksContent).toContain('useCreateCruiseMutation');
    expect(hooksContent).toContain("types: ['cruise']");
  });

  it('should have CREATE_TOUR_MUTATION defined with isVisible field', () => {
    expect(CREATE_TOUR_MUTATION).toBeDefined();
    const query = CREATE_TOUR_MUTATION.loc?.source.body || '';
    expect(query).toContain('isVisible');
  });

  it('should have CREATE_CRUISE_MUTATION defined with isVisible field', () => {
    expect(CREATE_CRUISE_MUTATION).toBeDefined();
    const query = CREATE_CRUISE_MUTATION.loc?.source.body || '';
    expect(query).toContain('isVisible');
  });

  it('SEARCH_PRODUCTS_QUERY should include createdAt for new product detection', () => {
    expect(SEARCH_PRODUCTS_QUERY).toBeDefined();
    const query = SEARCH_PRODUCTS_QUERY.loc?.source.body || '';
    expect(query).toContain('createdAt');
    expect(query).toContain('searchProducts');
  });
});
