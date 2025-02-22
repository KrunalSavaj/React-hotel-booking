/* eslint-disable no-undef */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export function useChecking() {
    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
        mutationFn: (bookingId, breakfast) =>
            updateBooking(bookingId, { status: "checked-in", isPaid: true, ...breakfast }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked in`);
            queryClient.invalidateQueries({ active: true });
            navigate("/");
        },

        onError: (error) => {
            toast.error("There was an error while checking in");
            console.log(error);
        },
    });

    return { checkin, isCheckingIn };
}
