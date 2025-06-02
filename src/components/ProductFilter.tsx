// components/ProductFilter.tsx
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductFilterProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  sortOrder: string;
  onSortChange: (val: string) => void;
}

export default function ProductFilter({
  searchTerm,
  onSearchChange,
  sortOrder,
  onSortChange,
}: ProductFilterProps) {
  return (
    <div className="container mx-auto px-4 mt-24">
      {/* Judul dan deskripsi */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2">Shop</h1>
        <p className="text-muted-foreground">
          Ini adalah tempat Anda bisa menjelajahi produk toko.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <Input
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="md:w-1/3"
        />

        <Select value={sortOrder} onValueChange={onSortChange}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Pengurutan standar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Pengurutan standar</SelectItem>
            <SelectItem value="price_asc">Harga naik</SelectItem>
            <SelectItem value="price_desc">Harga turun</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
