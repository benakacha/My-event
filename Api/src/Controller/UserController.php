<?php

namespace App\Controller;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/api/users", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository)
    {
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findAll();
        $data = $this->get('serializer')->serialize($user, 'json');

        $response = new Response($data);
        $response->headers->set('Content-type', 'application/json');

        return $response;
    }

}
