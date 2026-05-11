#!/usr/bin/env sh
# Next.js + Turbopack on Linux: "OS file watch limit reached" / bogus "react/jsx-runtime" errors
# are usually inotify limits, not broken node_modules.

echo "Current inotify limits:"
echo "  fs.inotify.max_user_watches=$(cat /proc/sys/fs/inotify/max_user_watches)"
echo "  fs.inotify.max_user_instances=$(cat /proc/sys/fs/inotify/max_user_instances 2>/dev/null || echo '?')"
echo ""
echo "If dev fails with 'Unable to watch ... node_modules/react', raise limits (until reboot):"
echo "  sudo sysctl fs.inotify.max_user_watches=524288"
echo "  sudo sysctl fs.inotify.max_user_instances=512"
echo ""
echo "Permanent (Debian/Ubuntu):"
echo "  echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify-nextjs.conf"
echo "  echo 'fs.inotify.max_user_instances=512' | sudo tee -a /etc/sysctl.d/99-inotify-nextjs.conf"
echo "  sudo sysctl --system"
echo ""
echo "If you see ENOENT under .next/dev/... or broken manifests, reset the cache:"
echo "  yarn clean && yarn dev     or:   yarn dev:fresh"
echo "Then: yarn dev   (webpack; clears .next/dev first). Turbopack: yarn dev:turbo:fresh"
exit 0
