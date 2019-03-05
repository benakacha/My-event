<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{

    private $user;


    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * @Route("/api/register", name="security", methods={"POST"})
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder, ObjectManager $om)
    {
        $postData = json_decode($request->getContent(), true);

        if($postData){
            if($om->getRepository(User::class)->findByEmail($postData['email'])){
                return new JsonResponse(["type" => "error", "message" => "An account already exist with this email"]);
            }
            $this->user->setEmail($postData['email'])
                ->setAvatar($postData['avatar'])
                ->setRoles(["ROLES"])
                ->setPseudo($postData['pseudo'])
                ->setPassword($encoder->encodePassword($this->user, $postData['password']));


                $om->persist($this->user);
                $om->flush();

        }

        return new JsonResponse(["message" => "Registration Successful !"]);
    }
}
