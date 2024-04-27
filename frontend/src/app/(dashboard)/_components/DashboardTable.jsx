import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DashboardTable = () => {
  return (
    <Card>
      <CardHeader className="px-7 w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <CardTitle className="text-teal-700">Prescriptions</CardTitle>
            <CardDescription>View recent prescriptions.</CardDescription>
          </div>
          <div>
            <Button>Add new prescription</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead className="hidden sm:table-cell">Medication</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Date Issued
              </TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                    View
                  </TableCell>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-[825px]">
                  <DialogHeader>
                    <DialogTitle>Patient's Prescription</DialogTitle>
                    <DialogDescription>
                      View prescriptions prescribed to patient
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-8 p-3">
                    <div className="bg-zinc-100 p-2 rounded-lg">
                      <span className="font-semibold text-teal-600">
                        Medication:
                      </span>
                      <p>Acetaminophen (Paracetamol): 500mg tablets</p>
                      <ul className="list-disc">
                        <span className="font-semibold text-teal-600">
                          Instruction for use:
                        </span>
                        <li>
                          Take 1 tablet every 4-6 hours as needed for headache
                          relief. Do not exceed 3,000mg in 24 hours.
                        </li>
                        <li>Take the medication with a full glass of water.</li>
                        <li>
                          Avoid taking other over-the-counter pain relievers
                          without consulting a healthcare professional.
                        </li>
                        <li>
                          If headache persists or worsens after taking
                          medication, seek medical attention.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 p-2 rounded-lg">
                      <ul className="list-disc">
                        <span className="font-semibold text-teal-600">
                          Additional Recomendations:
                        </span>
                        <li>Get plenty of rest </li>
                        <li>Stay hydrated by drinking water regularly.</li>
                        <li>
                          Avoid triggers such as loud noise, bright lights, or
                          strong smells.
                        </li>
                        <li>
                          Practice relaxation techniques like deep breathing or
                          meditation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-teal-100 text-teal-500"
                  variant="outline"
                >
                  Unused
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Williams</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  noah@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-teal-100 text-teal-500"
                  variant="outline"
                >
                  Unused
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-teal-600 cursor-pointer">
                View
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-xs bg-red-100 text-red-500"
                  variant="secondary"
                >
                  Used
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right text-teal-700">
                View profile
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DashboardTable;
