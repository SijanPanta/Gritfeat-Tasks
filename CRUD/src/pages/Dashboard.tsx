/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useState } from "react";

const fetchProducts = async (page: number) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products?limit=10&page=${page}`
  );
  return res.data;
};

export default function Dashboard() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
  });

  // --- CREATE ---
  const createMutation = useMutation({
    mutationFn: (newProduct: any) =>
      axios.post("https://fakestoreapi.com/products", newProduct),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  // --- UPDATE ---
  const updateMutation = useMutation({
    mutationFn: ({ id, updated }: any) =>
      axios.put(`https://fakestoreapi.com/products/${id}`, updated),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  // --- DELETE ---
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`https://fakestoreapi.com/products/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  // Form states
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching products</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      {/* Create Product */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4">Add Product</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mb-2"
          />
          <Button
            onClick={() => {
              createMutation.mutate({ title, price: Number(price) });
              setTitle("");
              setPrice("");
            }}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((p: any) => (
          <Card key={p.id} className="p-4">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm">${p.price}</p>
            <img src={p.image} alt={p.title} className="w-16"/>

            <div className="flex gap-2 mt-2">
              {/* Update */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                  </DialogHeader>
                  <Input
                    defaultValue={p.title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-2"
                  />
                  <Input
                    defaultValue={p.price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mb-2"
                  />
                  <Button
                    onClick={() => {
                      setEditId(p.id);
                      updateMutation.mutate({
                        id: p.id,
                        updated: { title, price: Number(price) },
                      });
                    }}
                  >
                    Update
                  </Button>
                </DialogContent>
              </Dialog>

              {/* Delete */}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteMutation.mutate(p.id)}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
