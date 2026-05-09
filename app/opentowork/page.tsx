import { STATUS, EMAIL } from '../data'
import Link from 'next/link'

export const metadata = {
  title: 'Open to Work',
}

export default function OpenToWork() {
  if (STATUS.state !== 'open') {
    return (
      <main className="space-y-6">
        <p className="text-zinc-600 dark:text-zinc-400">
          I&apos;m not searching for a job, but you can contact me at{' '}
          <Link
            href={`mailto:${EMAIL}`}
            className="underline dark:text-zinc-300"
          >
            {EMAIL}
          </Link>
        </p>
      </main>
    )
  }

  return (
    <main className="space-y-10">
      <section>
        <h3 className="mb-4 text-lg font-medium">TLDR</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Built and maintained infrastructure for a multi-tenant ERP platform.
          Docker, Docker Swarm, Terraform, Ansible, Apache, Linux, RESTful API,
          Stripe, load balancing, horizontal scaling, logging, health monitoring
          and security.
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-lg font-medium">How I Work</h3>
        <ul className="list-disc space-y-2 pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Straightforward and stable processes.
            </strong>{' '}
            I design systems and workflows to be simple to understand and hard
            to break. Complexity is a liability.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Professional and accountable.
            </strong>{' '}
            I take ownership of what I build and follow through on commitments.
            If something breaks, I fix it and document why.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Clear communication.
            </strong>{' '}
            I keep stakeholders informed during incidents, explain technical
            decisions in plain terms, and write documentation that outlasts my
            involvement.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Team-oriented.
            </strong>{' '}
            I collaborate closely with developers and operations, review
            infrastructure changes with peers, and leave code and runbooks
            better than I found them.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Incident response under pressure.
            </strong>{' '}
            I&apos;ve handled production outages, performed root cause analysis,
            and restored services while communicating clearly with stakeholders.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              Documentation-first.
            </strong>{' '}
            Every Ansible playbook and deployment step was documented. I write
            runbooks so the next person doesn&apos;t need to guess.
          </li>
          <li>
            <strong className="font-medium dark:text-zinc-100">
              AI-augmented workflow.
            </strong>{' '}
            I use Claude Code and Codex to accelerate automation scripting,
            infrastructure debugging, and documentation.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-4 text-lg font-medium">What I Want</h3>
        <ul className="list-disc space-y-2 pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            Continue learning DevOps and get deeper into web architecture.
          </li>
          <li>
            Opportunities to work with technologies I haven&apos;t mentioned
            yet: AWS, Azure, Redis, Kafka, RabbitMQ, HashiCorp Vault,
            Prometheus, Grafana, GitLab CI and serverless platforms such as
            Lambda and Cloud Functions.
          </li>
        </ul>
      </section>

      <section>
        <p className="text-zinc-600 dark:text-zinc-400">
          If this aligns with what you&apos;re looking for, reach out at{' '}
          <Link
            href={`mailto:${EMAIL}`}
            className="underline dark:text-zinc-300"
          >
            {EMAIL}
          </Link>
          .
        </p>
      </section>
    </main>
  )
}
