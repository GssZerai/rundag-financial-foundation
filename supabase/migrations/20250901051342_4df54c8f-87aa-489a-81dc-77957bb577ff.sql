-- Ensure RLS is enabled on consultations (it should already be if policies exist)
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Allow only admins to read consultations
CREATE POLICY "Admins can view consultations"
ON public.consultations
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));
