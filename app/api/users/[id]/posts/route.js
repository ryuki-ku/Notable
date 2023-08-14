import { connectToDB } from "@utils/database";
import Note from '@models/note';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const notes = await Note.find({creator: params.id}).populate('creator');
        return new Response(JSON.stringify(notes), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all notes', {status: 500});
    }
}