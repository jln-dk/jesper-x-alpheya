import { FacebookIcon } from "@/components/icons/facebook-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import { Button } from "@/components/ui/button";
import {
  loginWithFacebook,
  loginWithGoogle,
  loginWithTwitter,
} from "@/lib/actions";
import { WithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * @NOTE We use <form> to make it server action friendly.
 * We could use <button> with onClick handler, but that would make it
 * client action and not server action friendly.
 */

const socialLogins = [
  {
    action: loginWithFacebook,
    icon: FacebookIcon,
    label: "Continue with Facebook",
  },
  {
    action: loginWithGoogle,
    icon: GoogleIcon,
    label: "Continue with Google",
  },
  {
    action: loginWithTwitter,
    icon: TwitterIcon,
    label: "Continue with Twitter",
  },
];

type Props = WithClassName<{}>;

export function SocialLogins({ className }: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {socialLogins.map(({ action, icon: Icon, label }) => (
        <form key={label} action={action}>
          <Button variant="outline" type="submit">
            <Icon />
            {label}
          </Button>
        </form>
      ))}
    </div>
  );
}
