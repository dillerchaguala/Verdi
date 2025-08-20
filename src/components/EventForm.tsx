import React, { useState } from "react";

export interface EventData {
  title: string;
  date: string;
  description: string;
  image?: string;
}

interface EventFormProps {
  onCreate: (ev: EventData) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ title, date, description, image });
    setTitle("");
    setDate("");
    setDescription("");
    // No limpiar imagen aquí
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-8 w-full max-w-lg mx-auto">
      <form className="bg-white rounded-xl shadow-lg p-6" onSubmit={handleSubmit}>
        <h3 className="text-2xl font-bold mb-4 text-teal-500">Crear nuevo evento</h3>
        <input
          type="text"
          placeholder="Título del evento"
          className="w-full mb-2 p-2 border rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full mb-2 p-2 border rounded"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          className="w-full mb-2 p-2 border rounded"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Publicar evento</button>
      </form>
      <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
        <h4 className="text-lg font-bold mb-2 text-teal-500">Subir imagen del evento</h4>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-2"
          onChange={handleImageChange}
        />
        {image && <img src={image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}
      </div>
    </div>
  );
};

export default EventForm;
