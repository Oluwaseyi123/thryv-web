import { Resend } from 'resend'

const resend = new Resend('re_hdRW9Kxy_9unSsE5PHhqjmxMYEpbdFpDb')

export default defineEventHandler(async (event) => {
  console.log('Waitlist endpoint hit')

  try {
    const { email } = await readBody(event)
    console.log('Received email:', email)

    // Validate email
    if (!email || !email.includes('@')) {
      throw createError({
        statusCode: 400,
        message: 'Invalid email address'
      })
    }

    // Send welcome email to user
    const { data, error } = await resend.emails.send({
      from: 'Thryve <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Thryve Early Access!',
      html: `<p>Thanks for joining! We'll keep you updated on our launch.</p>`
    })

    if (error) {
      throw createError({
        statusCode: 500,
        message: 'Failed to send email'
      })
    }

    return {
      success: true,
      message: 'Successfully added to waitlist'
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to join waitlist'
    })
  }
})
