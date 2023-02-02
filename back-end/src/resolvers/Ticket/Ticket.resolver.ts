import { Arg, Args, Authorized, Mutation, Query, Resolver } from "type-graphql";
import Ticket from "../../models/Ticket/Ticket.entity";
import TicketRepository from "../../models/Ticket/Ticket.repository";
import { CreateTicketArgs, UpdateTicketArgs } from "./Ticket.input";

@Resolver(Ticket)
export default class TicketResolver {
  @Authorized()
  @Query(() => [Ticket])
  Tickets(): Promise<Ticket[]> {
    return TicketRepository.getTickets();
  }

  @Authorized("ROLE_RESTAURANT")
  @Query(() => [Ticket])
  TicketsByRestaurant(@Arg("id") id: string): Promise<Ticket[] | null> {
    return TicketRepository.getTicketsByRestaurant(id);
  }

  @Authorized("ROLE_RESTAURANT")
  @Query(() => Ticket)
  Ticket(@Arg("id") id: string): Promise<Ticket | null> {
    return TicketRepository.getTicketById(id);
  }

  @Mutation(() => Ticket)
  createTicket(
    @Args() { name, seats, restaurant, email, phoneNumber }: CreateTicketArgs
  ): Promise<Ticket> {
    return TicketRepository.createTicket(
      name,
      seats,
      restaurant,
      email,
      phoneNumber
    );
  }

  @Authorized("ROLE_RESTAURANT")
  @Mutation(() => Ticket)
  updateDeliveredAt(@Args() { id, table }: UpdateTicketArgs): Promise<Ticket> {
    return TicketRepository.updateDeliveredAt(id, table);
  }

  @Authorized("ROLE_RESTAURANT")
  @Mutation(() => Ticket)
  updatePlacedAt(@Arg("id") id: string): Promise<Ticket> {
    return TicketRepository.updatePlacedAt(id);
  }

  @Authorized("ROLE_RESTAURANT")
  @Mutation(() => Ticket)
  updateClosedAt(@Arg("id") id: string): Promise<Ticket> {
    return TicketRepository.updateClosedAt(id);
  }
}
