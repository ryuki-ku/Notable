import { connectToDB } from "@utils/database";
import Note from '@models/note';

// GET (read)
export const GET = async (req, {params}) => {
    try {
        await connectToDB();
        const note = await Note.findById(params.id).populate('creator');
        if(!params) return new Response('Note not found', {status: 404});
        
        return new Response(JSON.stringify(note), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all notes', {status: 500});
    };
};

// PATCH (update)
export const PATCH = async (req, {params}) => {
    const {note, tag} = await req.json();
    try {
        await connectToDB();

        const existNote = await Note.findById(params.id);
        
        if(!existNote) {
            return new Response('Note not found', {status: 404});
        }
        
        existNote.note = note;
        existNote.tag = tag;

        await existNote.save();
        return new Response(JSON.stringify(existNote), {status: 200})
    } catch (error) {
        return new Response('Failed to update all notes', {status: 500});
    };
};

// DELETE (delete)

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();

        await Note.findByIdAndRemove(params.id);
        return new Response('Note deleted', {status: 200});
    } catch (error) {
        return new Response("failed to delete note", {status: 500});
    };
};